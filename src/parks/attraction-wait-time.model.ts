import { AttractionStatus } from './attraction-status.enum';

export class AttractionWaitTime {
	public active: boolean;
	public id: string;
	public status: AttractionStatus;
	public updated: Date;
	public waitTime: number;
}
