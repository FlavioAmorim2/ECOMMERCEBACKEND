import BaseRepository from './BaseRepository.js';

class ProductRepository extends BaseRepository { //user esta erdando de baserep
    async getAll(){
        try {
            const results = await super.getAll('users', ['id', 'name', 'size', 'price_in_cents' ]);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getByid(id){
        try {
            const results = await super.getByid('users', ['id', 'name', 'size', 'price_in_cents'], id);
            return results;
        } catch (error) {
            throw error;
        }
    }
}


export default ProductRepository;