import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServices {
  setDataOnLocalStorage(key: string, data: any) {
    let storedDatas: any =
      this.getDataFromLocalStorage(key) === undefined
        ? []
        : this.getDataFromLocalStorage(key);
    if (storedDatas.length <= 0) {
      data.Id = 1;

      localStorage.setItem(key, JSON.stringify([data]));
    } else {
      let latestId = 0;
      for (let i = 0; i < storedDatas.length; i++) {
        if (storedDatas[i].Id >= latestId) latestId = storedDatas[i].Id + 1;
      }
      data.Id = latestId;
      storedDatas.push(data);
      localStorage.setItem(key, JSON.stringify(storedDatas));
    }
  }
  getDataFromLocalStorage(key: string): any {
    let storage = localStorage.getItem(key);
    if (!storage) {
      return [];
    }
    return JSON.parse(localStorage.getItem(key) as string);
  }
  removeDataFromLocalStorage(key: string, id: number): any {
    let storage = localStorage.getItem(key);
    if (!storage) {
      return 'There is no records found.';
    }
    let datas = JSON.parse(localStorage.getItem(key) as string);
    let updatedRecord = datas.filter((item: any) => item.Id !== id);
    localStorage.setItem(key, JSON.stringify(updatedRecord));
  }
  updateDataOnLocalStorage(key: string, data: any, id: number): any {
    let storage = localStorage.getItem(key);
    if (!storage) {
      return 'There is no records found.';
    }
    let datas = JSON.parse(localStorage.getItem(key) as string);
    let updatedRecord = datas.map((item: any) => {
      if (item.Id === id) {
        return { title: data.title, desc: data.desc, Id: id };
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(updatedRecord));
  }
}
