export = Achievement;
declare class Achievement {
    constructor(achievement: any);
    api: any;
    name: any;
    description: any;
    achieved: boolean;
    unlockTime: any;
    /**
     * @type {Date} Date when this achievement was unlocked at.
     * @readonly
     */
    readonly get unlockedAt(): Date;
}
//# sourceMappingURL=Achievement.d.ts.map