import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(apptList: Array<any>, searchterms: String):
   any {
    if(searchterms == null){
      return apptList;
    }
    var results = [];
    for (let entry of apptList){
      if(entry.patient.toLowerCase().includes(searchterms.toLowerCase())|| entry.complaint.toLowerCase().includes(searchterms.toLowerCase()) || entry.date.toString().includes(searchterms) || entry.time.toString().includes(searchterms) )
      {
        results.push(entry)
      }
    }
    return results;
  }

}
