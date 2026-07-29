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
    feePayments: {
        dbLabel: 'currentFeePayment',
        whereKeys: 'paymentId',
        backupDb: FIREBASETABLE.SCHOOLFEEPAYMENTS
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
        whereKeys: 'schoolId',
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
    cancelledPayments: {
        dbLabel: 'currentCancelledPayment',
        whereKeys: 'cancellationId',
        backupDb: FIREBASETABLE.CANCELLEDPAYMENTS
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
        whereKeys: 'admissionId',
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
    schoolTimetable: {
        dbLabel: 'currentSchoolTimetable',
        whereKeys: 'termId',
        backupDb: FIREBASETABLE.SCHOOLTIMETABLE
    },
    lessonNote: {
        dbLabel: 'currentNote',
        whereKeys: 'noteId',
        backupDb: FIREBASETABLE.LESSONNOTES
    },
    assessment: {
        dbLabel: 'currentAssessment',
        whereKeys: 'assessmentId',
        backupDb: FIREBASETABLE.ASSESSMENTS
    },
    schoolGrading: {
        dbLabel: 'currentGrading',
        whereKeys: 'gradeId',
        backupDb: FIREBASETABLE.SCHOOLGRADINGS,
    },
    question: {
        dbLabel: 'currentQuestion',
        whereKeys: 'questionId',
        backupDb: FIREBASETABLE.QUESTIONS
    },
    schoolSubject: {
        dbLabel: 'currentSubject',
        whereKeys: 'subjectId',
        backupDb: FIREBASETABLE.SUBJECTS
    },
    subjectGrading: {
        dbLabel: 'currentSubjectGrading',
        whereKeys: ['subjectId', 'classId', 'gradeId', 'termId'],
        backupDb: FIREBASETABLE.SUBJECTGRADINGS
    },
    subjectTopic: {
        dbLabel: 'currentSubjectTopic',
        whereKeys: 'topicId',
        backupDb: FIREBASETABLE.SUBJECTTOPICS
    },
    questionItem: {
        dbLabel: 'currentQuestionItem',
        whereKeys: 'itemId',
        backupDb: FIREBASETABLE.QUESTIONITEMS
    },
    // reportSheet: {
    //     dbLabel: 'currentReportSheet',
    //     whereKeys: ['studentId', 'termId'],
    //     backupDb: FIREBASETABLE.STUDENTREPORTS
    // },
};
//# sourceMappingURL=backups.firestore.js.map