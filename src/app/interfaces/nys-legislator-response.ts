import { NysLegislator } from "./nys-legislator";

export interface NysLegislatorResponse {
	"success" : boolean;
    "message" : string;
    "responseType" : string;
    "total" : number;
    "offsetStart" : number;
    "offsetEnd" : number;
    "limit" : number;
    "result" : {
		"items" : NysLegislator[];
		"size" : number;
	}
}
