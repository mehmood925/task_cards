import response from '../utility/response.js';
import card from '../entity/card.js';
class CardService {

    async create(params: any) {
        try {
            const _card: any = new card();
            _card.title = params.title;
            _card.project = params.project;
            _card.state = params.state;
            _card.assignee = params.assignee;
            _card.createdAt = new Date().toUTCString();
            _card.updatedAt = new Date().toUTCString();
            await _card.save();
            return new response(201, 'Record Created Successfully');
        } catch (error) {
            return new response(500, JSON.stringify(error));
        }
    }

    async list(params: any) {
        try {
            const _response: any = await card.aggregate([
                {
                    $group: {
                        _id: '$state', count: { $sum: 1 }, data: { $push: '$$ROOT' }
                    }
                }
            ])
            if (!_response) {
                return new response(404, 'Record Not Found');
            }
           
            return new response(200, _response);
        } catch (error) {
            return new response(500, JSON.stringify(error));
        }
    }

}
export default CardService