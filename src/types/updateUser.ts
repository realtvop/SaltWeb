import type { DivingFishB50, DivingFishFullRecord } from "@/divingfish/type";
import type { UserMusic } from "./inGame";

export interface UpdateUserResponse {
    userName: string;
    iconId: number;
    rating: number;
    userMusicList: UserMusic[];
    divingFishData: DivingFishFullRecord[];
    b50: DivingFishB50;
    isLogin: boolean;
}
