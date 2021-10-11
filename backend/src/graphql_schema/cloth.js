import { Cloth, ClothTC } from '../models/cloth.js'

export const ClothQuery = {
    clothById: ClothTC.getResolver('findById'),
    clothByIds: ClothTC.getResolver('findByIds'),
    clothOne: ClothTC.getResolver('findOne'),
    clothMany: ClothTC.getResolver('findMany'),
    clothCount: ClothTC.getResolver('count'),
    clothConnection: ClothTC.getResolver('connection'),
    clothPagination: ClothTC.getResolver('pagination'),
};

export const ClothMutation = {
    clothCreateOne: ClothTC.getResolver('createOne'),
    clothCreateMany: ClothTC.getResolver('createMany'),
    clothUpdateById: ClothTC.getResolver('updateById'),
    clothUpdateOne: ClothTC.getResolver('updateOne'),
    clothUpdateMany: ClothTC.getResolver('updateMany'),
    clothRemoveById: ClothTC.getResolver('removeById'),
    clothRemoveOne: ClothTC.getResolver('removeOne'),
    clothRemoveMany: ClothTC.getResolver('removeMany'),
}
