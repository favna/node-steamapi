export = Badge;
declare class Badge {
    constructor(badge: any);
    appID: any;
    badgeID: any;
    borderColor: any;
    communityItemID: any;
    completionTime: any;
    level: any;
    scarcity: any;
    xp: any;
    /**
     * @type {Date} Date when this badge was completed.
     * @readonly
     */
    readonly get completedAt(): Date;
}
//# sourceMappingURL=Badge.d.ts.map