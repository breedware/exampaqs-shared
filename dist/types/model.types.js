// student reg form data
;
export var CHILD_RELATIVE;
(function (CHILD_RELATIVE) {
    CHILD_RELATIVE["FATHER"] = "father";
    CHILD_RELATIVE["MOTHER"] = "mother";
    CHILD_RELATIVE["UNCLE"] = "uncle";
    CHILD_RELATIVE["AUNT"] = "aunt";
    CHILD_RELATIVE["GUARDIAN"] = "guardian";
})(CHILD_RELATIVE || (CHILD_RELATIVE = {}));
export var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (GENDER = {}));
export var RELIGION;
(function (RELIGION) {
    RELIGION["CHRISTIANITY"] = "chritianity";
    RELIGION["ISLAM"] = "islam";
    RELIGION["OTHERS"] = "others";
    RELIGION["PREFER_NOT"] = "prefer not to say";
})(RELIGION || (RELIGION = {}));
export var BLOOD_GROUP;
(function (BLOOD_GROUP) {
    BLOOD_GROUP["A"] = "A";
    BLOOD_GROUP["B"] = "B";
    BLOOD_GROUP["O"] = "O";
    BLOOD_GROUP["AB"] = "AB";
})(BLOOD_GROUP || (BLOOD_GROUP = {}));
export var GENOTYPE;
(function (GENOTYPE) {
    GENOTYPE["AA"] = "AA";
    GENOTYPE["AS"] = "AS";
    GENOTYPE["SS"] = "SS";
    GENOTYPE["AC"] = "AC";
    GENOTYPE["SC"] = "SC";
})(GENOTYPE || (GENOTYPE = {}));
export var SuggestionStatus;
(function (SuggestionStatus) {
    SuggestionStatus["PENDING"] = "pending";
    SuggestionStatus["RESOLVED"] = "resolved";
    SuggestionStatus["REJECTED"] = "rejected";
})(SuggestionStatus || (SuggestionStatus = {}));
export var TERM_STATUS;
(function (TERM_STATUS) {
    TERM_STATUS["ACTIVE"] = "active";
    TERM_STATUS["EXPELLED"] = "expelled";
    TERM_STATUS["WITHDRAWN"] = "withdrawn";
    TERM_STATUS["GRADUATED"] = "graduated";
})(TERM_STATUS || (TERM_STATUS = {}));
export var JOB_QUALIFICATIONS;
(function (JOB_QUALIFICATIONS) {
    JOB_QUALIFICATIONS["BASIC"] = "Basic Education/Primary School Certificate";
    JOB_QUALIFICATIONS["SSCE"] = "Senior Secondary Certificate Examination";
    JOB_QUALIFICATIONS["ND"] = "National Diploma";
    JOB_QUALIFICATIONS["HND"] = "Higher National Diploma";
    JOB_QUALIFICATIONS["BSC"] = "Bachelor Degree";
    JOB_QUALIFICATIONS["MSC"] = "Masters Degree";
    JOB_QUALIFICATIONS["PHD"] = "Doctorate Degreee";
})(JOB_QUALIFICATIONS || (JOB_QUALIFICATIONS = {}));
export const CertificateRankings = [
    {
        certificate: JOB_QUALIFICATIONS.BASIC,
        ranking: 1
    },
    {
        certificate: JOB_QUALIFICATIONS.SSCE,
        ranking: 2
    },
    {
        certificate: JOB_QUALIFICATIONS.ND,
        ranking: 3
    },
    {
        certificate: JOB_QUALIFICATIONS.HND,
        ranking: 4
    },
    {
        certificate: JOB_QUALIFICATIONS.BSC,
        ranking: 5
    },
    {
        certificate: JOB_QUALIFICATIONS.MSC,
        ranking: 6
    },
    {
        certificate: JOB_QUALIFICATIONS.PHD,
        ranking: 7
    }
];
export var STUDENT_TRIP_STATUS;
(function (STUDENT_TRIP_STATUS) {
    STUDENT_TRIP_STATUS["ONBOARD"] = "onboard";
    STUDENT_TRIP_STATUS["ALIGHTED"] = "alighted";
    STUDENT_TRIP_STATUS["RETURNED"] = "returned";
    STUDENT_TRIP_STATUS["EMERGENCY"] = "emergency";
})(STUDENT_TRIP_STATUS || (STUDENT_TRIP_STATUS = {}));
export var VEHICLE_TRIP_STATUS;
(function (VEHICLE_TRIP_STATUS) {
    VEHICLE_TRIP_STATUS["ACTIVE"] = "active";
    VEHICLE_TRIP_STATUS["ENDED"] = "ended";
    VEHICLE_TRIP_STATUS["DISTRESSED"] = "distressed";
    VEHICLE_TRIP_STATUS["DELAYED"] = "delayed";
})(VEHICLE_TRIP_STATUS || (VEHICLE_TRIP_STATUS = {}));
export var ATTENDANCE_STATUS;
(function (ATTENDANCE_STATUS) {
    ATTENDANCE_STATUS["PRESENT"] = "present";
    ATTENDANCE_STATUS["EXCUSED"] = "excused";
    ATTENDANCE_STATUS["LATE"] = "late";
    ATTENDANCE_STATUS["ABSENT"] = "absent";
})(ATTENDANCE_STATUS || (ATTENDANCE_STATUS = {}));
export var NotificationPriority;
(function (NotificationPriority) {
    NotificationPriority["LOW"] = "low";
    NotificationPriority["MEDIUM"] = "medium";
    NotificationPriority["HIGH"] = "high";
    NotificationPriority["URGENT"] = "urgent";
})(NotificationPriority || (NotificationPriority = {}));
export var NotificationCategory;
(function (NotificationCategory) {
    NotificationCategory["PAYMENT"] = "payment";
    NotificationCategory["ACADEMIC"] = "academic";
    NotificationCategory["ATTENDANCE"] = "attendance";
    NotificationCategory["SYSTEM"] = "system";
    NotificationCategory["ALL"] = "all";
})(NotificationCategory || (NotificationCategory = {}));
export var PAYMENT_PURPOSE;
(function (PAYMENT_PURPOSE) {
    PAYMENT_PURPOSE["SCHOOL_SMS"] = "school sms";
    PAYMENT_PURPOSE["ACCOUNT_SMS"] = "account sms";
    PAYMENT_PURPOSE["SCHOOL_FEE"] = "school fee";
})(PAYMENT_PURPOSE || (PAYMENT_PURPOSE = {}));
//# sourceMappingURL=model.types.js.map