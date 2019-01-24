import { NysBill } from "./nys-bill";

export interface NysBillResponse {
	message: string;
	responseType: string;
	success: string;
	result: NysBill;
}
