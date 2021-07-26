import express from 'express'
import log from '../generators/console/log';
import createModel from './crud.model';

function crudCtrl(route) {
    const router = express.Router();
    const model = createModel(route);

    router.get('/', async (req, res) => {
        try {
            const data = await model.find({ ...req.query });
            res.status(200).json(data)
        } catch (e) {
            log.error(`On route '[GET] /${route.name}' : Unable to read data`, 500)
            res.status(500).json({ message: 'Unable to read data' });
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const data = await model.findById(req.params.id)
            if (!data) {
                log.error(`On route '[GET] /${route.name}/${req.params.id}' : Resource not found.`, 404);
                res.status(404).json({ message: 'Not found!' });
            } else {
                res.status(200).json(data);
            }
        } catch (e) {
            log.error(`On route '[GET] /${route.name}/${req.params.id}' : ${e.message}`, 500);
        }
    })

    router.post('/', async (req, res) => {
        try {
            const newData = new model({ ...req.body });
            console.log(req.body, newData);
            await newData.save();
            res.status(201).json({ message: 'Item Created!', id: newData._id });
        } catch (e) {
            log.error(`On route '[POST] /${route.name}' : ${e.message}`, 422);
            res.status(422).json(e)
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            await model.deleteOne({ _id: req.params.id })
            res.status(200).json({ message: 'Item deleted!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    router.put('/:id', async (req, res) => {
        delete req.body._id;
        try {
            await model.updateOne({ _id: req.params.id }, { ...req.body })
            res.status(200).json({ message: 'Item Updated!' });
        } catch (e) {
            res.status(422).json(e)
        }
    });

    return router;
}
export default crudCtrl;