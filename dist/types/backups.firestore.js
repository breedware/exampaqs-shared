import { FIREBASETABLE } from "./firestore.table.js";
export const backupDbs = {
    // counter: {
    //     dbLabel: 'currentManager',
    //     firestorReference: 'counterreference',
    //     backupDb: FIREBASETABLE.COUNTER currentRole
    // },
    academicSessions: {
        dbLabel: 'currentSession',
        whereKeys: 'sessionId',
        backupDb: FIREBASETABLE.ACADEMICSESSIONS
    },
    userAccounts: {
        dbLabel: 'currentAccount',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.ACCOUNTS
    },
    childAccounts: {
        dbLabel: 'currentChild',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.ACCOUNTS
    },
    attendances: {
        dbLabel: 'currentRegister',
        whereKeys: 'registerId',
        backupDb: FIREBASETABLE.ATTENDANCES
    },
    bankAccounts: {
        dbLabel: 'currentBankAccount',
        whereKeys: 'bankId',
        backupDb: FIREBASETABLE.BANKACCOUNTS
    },
    parents: {
        dbLabel: 'currentParent',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.PARENTS
    },
    payments: {
        dbLabel: 'currentPayment',
        whereKeys: 'paymentId',
        backupDb: FIREBASETABLE.PAYMENTS
    },
    platformAdmins: {
        dbLabel: 'currentAdministrator',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.PLATFORMADMIN
    },
    proprietors: {
        dbLabel: 'currentProprietor',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.PROPRIETORS
    },
    schoolStaffs: {
        dbLabel: 'currentStaff',
        whereKeys: 'staffId',
        backupDb: FIREBASETABLE.SCHOOLSTAFFS
    },
    classrooms: {
        dbLabel: 'currentClassroom',
        whereKeys: 'classroomId',
        backupDb: FIREBASETABLE.SCHOOLCLASSROOMS
    },
    events: {
        dbLabel: 'currentEvent',
        whereKeys: 'eventId',
        backupDb: FIREBASETABLE.SCHOOLEVENTS
    },
    schoolLocations: {
        dbLabel: 'currentLocation',
        whereKeys: 'locationId',
        backupDb: FIREBASETABLE.SCHOOLLOCATIONS
    },
    schools: {
        dbLabel: 'currentSchool',
        whereKeys: 'schoolId',
        backupDb: FIREBASETABLE.SCHOOLS
    },
    schoolVehicles: {
        dbLabel: 'currentVehicle',
        whereKeys: 'vehicleId',
        backupDb: FIREBASETABLE.SCHOOLVEHICLES
    },
    studentPickers: {
        dbLabel: 'currentPicker',
        whereKeys: 'pickerId',
        backupDb: FIREBASETABLE.STUDENTPICKERS
    },
    students: {
        dbLabel: 'currentStudent',
        whereKeys: 'accountId',
        backupDb: FIREBASETABLE.STUDENTS
    },
    termlyEnrolments: {
        dbLabel: 'currentEnrolment',
        whereKeys: 'enrolmentId',
        backupDb: FIREBASETABLE.TERMLYENROLMENTS
    },
    vehicleTrips: {
        dbLabel: 'currentTrip',
        whereKeys: 'tripId',
        backupDb: FIREBASETABLE.VEHICLETRIPS
    },
    vehicleAssignments: {
        dbLabel: 'currentAssignment',
        whereKeys: 'assignmentId',
        backupDb: FIREBASETABLE.VEHICLEASSIGNMENTS
    },
    studentTrips: {
        dbLabel: 'currentStudentTrip',
        whereKeys: 'studentTripId',
        backupDb: FIREBASETABLE.STUDENTTRIPS
    },
    paymentAdvices: {
        dbLabel: 'currentAdvice',
        whereKeys: 'adviceId',
        backupDb: FIREBASETABLE.PAYMENTADVICES
    },
};
//# sourceMappingURL=backups.firestore.js.map