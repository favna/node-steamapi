export = Friend;
declare const Friend_base: typeof import("./Player");
declare class Friend extends Friend_base {
    constructor(friend: any);
    steamID: any;
    relationship: any;
    friendSince: any;
    /**
     * @type {Date} Date when this person was friended.
     * @readonly
     */
    readonly get friendedAt(): Date;
}
//# sourceMappingURL=Friend.d.ts.map