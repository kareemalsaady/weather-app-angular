import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'temperatureUnit'
})

export class TemperatureUnitPipe implements PipeTransform{
  transform(temperature: number, unitType: string){
      switch(unitType){
        case "F":
        const celsius = (temperature -32) * 0.5556;
        return celsius;
        default:
        return  temperature;
      }
  }
}
