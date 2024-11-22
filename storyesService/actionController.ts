import { Request, Response } from 'express';
import { Action } from './models/action';
import {Op} from 'sequelize'

export const logAction = async (req: Request, res: Response) => {
  try {
    const { plu, shop_id, action, date } = req.body;
    const newAction = await Action.create({ plu, shop_id, action, date });
    res.status(201).json(newAction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getActions = async (req: Request, res: Response) => {
  try {
    const { plu, shop_id, start_date, end_date, action } = req.query;
    const where: any = {};

    if (plu) where.plu = plu;
    if (shop_id) where.shop_id = shop_id;
    if (action) where.action = action;
    if (start_date) where.date = { [Op.gte]: start_date };
    if (end_date) where.date = { [Op.lte]: end_date };

    const actions = await Action.findAll({ where });
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};