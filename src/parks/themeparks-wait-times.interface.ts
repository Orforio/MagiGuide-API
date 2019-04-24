export interface ThemeparksWaitTimes {
	active: boolean;
	fastPass: boolean;
	fastPassReturnTime?: FastpassReturnTime;
	id: string | number;
	lastUpdate: number;
	name: string;
	schedule?: Schedule;
	status: Status;
	waitTime: number;
}

export interface FastpassReturnTime {
	endTime: string;
	lastUpdate: Date;
	startTime: string;
}

export interface Schedule {
	closingTime: Date;
	openingTime: Date;
	special?: Schedule[];
	type: Status;
}

export enum Status {
	Closed = 'Closed',
	Down = 'Down',
	Operating = 'Operating',
	Refurbishment = 'Refurbishment'
}
