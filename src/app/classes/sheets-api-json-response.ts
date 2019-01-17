import { PriorityBill } from "./priority-bill";

export class SheetsApiJSONResponse {
	"encoding": string;
	"feed": {
		"xmlns": string;
		"xmlns$openSearch": string;
		"xmlns$gsx": string;
		"id": {};
		"updated": {};
		"author": [{
			"name": string;
			"email": string;
		}];
		"category": {};
		"entry": [PriorityBill];
		"link": {};
		"openSearch$startIndex": {};
		"openSearch$totalResults": {};
		"title": {
			"$t": string;
			"type": string;
		};
	}
	"version": number;
}
