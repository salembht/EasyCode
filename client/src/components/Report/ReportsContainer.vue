<style>
.easy-code-report-container {
    margin: 0;
    padding: 0;
    margin-top: 4px;
    background-color: rgba(220, 220, 234, 0.523);
    border: 2px solid rgba(13, 46, 103, 0.591);
    border-radius: 4px;
    max-height: 90vh;
    overflow-y: auto;
    scroll-margin: 0;
    scroll-padding: 0;
    scroll-snap-type: mandatory;
    scroll-behavior: smooth;
}
</style>

<template>
    <div id="easy-code-report-container-id" class="easy-code-report-container">
        <ReportHeader @report-type-changed="changeReportTemp" @report-data="fillTempWithReportData" />
        <!--Reports Temps-->
        <GeneralTemp v-if="reportData && reportType == 'general'" :report-data="reportData" />
        <CoursesTemp v-if="reportData && reportType == 'courses'" :report-data="reportData" />
        <UsersTemp v-if="reportData && (reportType == 'students' || reportType == 'supervisors')" :report-data="reportData" />

    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ReportHeader from "./ReportHeader.vue";
import GeneralTemp from "./GeneralTemp.vue";
import CoursesTemp from "./CoursesTemp.vue"
import UsersTemp from "./UsersTemp.vue"

@Options({
    components: {
        ReportHeader,
        GeneralTemp,
        CoursesTemp,
        UsersTemp
    },
    data() {
        return {
            reportData: null,
            reportType: 'general'
        };
    },
    beforeMount() { },
    mounted() { },
    methods: {
        changeReportTemp(reportType: 'general' | 'courses' | 'supervisors' | 'students') {
            this.reportData = null;
            this.reportType = reportType;
        },
        fillTempWithReportData(data: any) {
            this.reportData = data;
        }
    },
})
export default class ReportsContainer extends Vue {
    [x: string]: any;
}
</script>