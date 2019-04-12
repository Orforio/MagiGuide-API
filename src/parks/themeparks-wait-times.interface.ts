export interface ThemeparksWaitTimes {
	active: boolean;
	fastPass: boolean;
	fastPassReturnTime?: FastpassReturnTime;
	id: string | number;
	lastUpdate: Date;
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
	closingTime: string;
	openingTime: string;
	special?: Schedule[];
	type: Status;
}

export enum Status {
	Closed = 'Closed',
	Down = 'Down',
	Operating = 'Operating',
	Refurbishment = 'Refurbishment'
}
