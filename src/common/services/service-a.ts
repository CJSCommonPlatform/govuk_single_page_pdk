import {IModel} from '../interfaces';

export class ServiceA {

  static $inject = ['$http', '$q'];

  constructor(private _$http: ng.IHttpService, private _$q: ng.IQService) {}

  create(value1: string, value2: string): ng.IPromise<IModel> {
    return this._$http({
      method:  'POST',
      url:     '/models',
      data:    {value1, value2}
    })
      .then(res => res.data)
      .catch(res => this._$q.reject(res.data));
  }

  findOne(id: number): ng.IPromise<IModel> {
    return this._$http({
      method: 'GET',
      url:    `/models/${id}`
    })
      .then(res => res.data)
      .catch(res => this._$q.reject(res.data));
  }
}