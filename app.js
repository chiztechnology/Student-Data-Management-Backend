require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
// app routers
const userRouter = require('./api/users/user.router');
const studentRouter = require('./api/students/student.router');
const surveyRouter = require('./api/surveys/survey.router');
const tallyFormRouter = require('./api/tallyForms/tallyForm.router');
const testRouter = require('./api/tests/test.router');
const attendanceRecordRouter = require('./api/attendanceRecords/attendanceRecord.router');
const examResultRouter = require('./api/examResults/examResult.router');
const gradeRouter = require('./api/grades/grade.router');

app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: ['*', 'http://localhost:3000/']
}))

.use(express.json())
.use('/api/users', userRouter)
.use('/api/students', studentRouter)
.use('/api/surveys', surveyRouter)
.use('/api/tallyForms', tallyFormRouter)
.use('/api/tests', testRouter)
.use('/api/attendanceRecords', attendanceRecordRouter)
.use('/api/examResults', examResultRouter)
.use('/api/grades', gradeRouter)

.listen(process.env.APP_PORT, ()=>{
    console.log(`server started on port ${APP_PORT}`)
})