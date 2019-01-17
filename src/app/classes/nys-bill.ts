import { NysLegislator } from "./nys-legislator";

export class NysBill {
	"actions": {
		"items": [{
			"billId": {
				"basePrintNo": string;
				"basePrintNoStr": string;
				"printNo": string;
				"session": number;
				"version": string;
			};
			"chamber": string;
			"date": string;
			"sequenceNo": number;
			"text": string;
		}];
		"size": number;
	};
	"activeVersion": string;
	"additionalSponsors": {
		"items": [{}];
		"size": number;
	};
	"adopted": boolean;
	"amendmentVersions": {
		"items": [{}];
		"size": number;
	};
	"amendments": {
		"items": [{
			"actClause": string;
			"basePrintNo": string;
			"basePrintNoStr": string;
			"coSponsors": {
				"items": NysLegislator[],
				"size": number;
			};
			"fullText": string;
			"fullTextFormats": [string];
			"fullTextHtml": string;
			"lawCode": string;
			"LawSection": string;
			"memo": string;
			"multiSponsors":{
				"size": number;
				"items": NysLegislator[];
			};
			"printNo": string;
			"publishDate": string;
			"sameAs": {};
			"session": number;
			"stricken": boolean;
			"uniBill": boolean;
			"version": string;
		}];
		"size": number;
	};
	"approvalMessage": string;
	"basePrintNo": string;
	"basePrintNoStr": string;
	"billType": {
		"chamber": string;
		"desc": string;
		"resolution": boolean;
	};
	"calendars": {
		"items": [{
			"calendarNumber": number;
			"year": number;
		}];
		"size": number;
	};
	"committeeAgendas": {
		"items": [{
			"agendaId": {
				"number": number;
				"year": number;
			};
			"committeeId": {
				"chamber": string;
				"name": string;
			};
		}];
		"size": number;
	};
	"milestones": {
		"items": [{
			"actionDate": string;
			"billCalNo": string;
			"committeeName": string;
			"statusDesc": string;
			"statusType": string;
		}];
		"size": number;
	};
	"pastCommittees": {
		"items": [{
			"chamber": string;
			"name": string;
			"referenceDate": string;
			"sessionYear": number;
		}];
		"size": number;
	};
	"previousVersions": {
		"items": [{}];
		"size": number;
	};
	"printNo": string;
	"programInfo": string;
	"publishStatusMap": {
		"items": [{
			"effectDateTime": string;
			"published": boolean;
			"version": string;
		}];
		"size": number;
	};
	"publishedDateTime": string;
	"reprintOf": string;
	"session": number;
	"signed": boolean;
	"sponsor": {
		"member": NysLegislator;
		"budget": boolean;
		"rules": boolean;
	};
	"status": {
		"statusType": string;
		"statusDesc": string;
		"actionDate": string;
		"committeeName": string;
		"billCalNo": string;
	};
	"substitutedBy": string;
	"summary": string;
	"title": string;
	"vetoMessages": {
		"items": [{}];
		"size": number;
	};
	"vetoed": boolean;
	"votes": {
		"items": [{
			"billId": {
				"basePrintNo": string;
				"basePrintNoStr": string;
				"printNo": string;
				"session": number;
				"version": string;
			};
			"committee": {
				"chamber": string;
				"name": string;
			};
			"memberVotes": {
				"items": {
					"AYE": {
						"items": NysLegislator[];
						"size": number;
					};
					"AYEWR": {
						"items": NysLegislator[];
						"size": number;
					};
					"size": number;
				};
				"size": number;
			};
			"version": string;
			"voteDate": string;
			"voteType": string;
		}];
		"size": number;
	};
	"year": number;
}
