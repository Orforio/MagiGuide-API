import { AttractionSchedule } from './attraction-schedule.model';

export class Attraction {
	public fastpassEnabled: boolean;
	public id: string;
	public name: string;
	public schedule: AttractionSchedule;
	public updated: Date;
}
