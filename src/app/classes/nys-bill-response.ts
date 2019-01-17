import { NysBill } from "./nys-bill";

export class NysBillResponse {
	message: string;
	responseType: string;
	success: string;
	result: NysBill;
}
