import { PriorityBill } from '../classes/priority-bill';
import { LocalTargets } from './local-targets';

export interface GoogleSheetsJsonFeed {
	"feed": {
		"title": {
			"type": "",
			"$t": ""
		},
		"updated": { "$t": String }
	}
}

export interface BillFeed extends GoogleSheetsJsonFeed {
	"feed": {
		"entry": PriorityBill[],
		"title": {
			"type": "",
			"$t": ""
		},
		"updated": { "$t": String }
	}
}

export interface LocalTargetsFeed extends GoogleSheetsJsonFeed {
	"feed": {
		"entry": LocalTargets[],
		"title": {
			"type": "",
			"$t": ""
		},
		"updated": { "$t": String }
	}
}
