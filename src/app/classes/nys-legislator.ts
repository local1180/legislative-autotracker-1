export interface NysLegislator {
	// short list return
	"memberId" : number;
	"sessionMemberId" : number;
	"shortName" : string;
	"sessionYear" : number;
	"chamber" : string;
	"districtCode" : number;
	"alternate" : boolean;

	// full list return
	"email": string;
	"firstName": string;
	"fullName": string;
	"imgName": string;
	"incumbent": boolean;
	"lastName": string;
	"middleName": string;
	"personId": number;
	"prefix": string;
	"suffix": string;
	"verified": boolean;

	// list of all sessions
	"sessionShortNameMap": {};
}
