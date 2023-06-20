<template lang="">
    <main class="dashboard-main">
        <DashboardHeader />
        <div class="inf-card-container">
            <infCard statTitle="לחיצות יומיות" stat="53,000" svg="ClickIcon" suffix="+30%" prefix=""/>
            <infCard statTitle="שבעי רצון" stat="820" svg="HeartIcon" suffix="+5%" prefix="+" />
            <infCard   statTitle="משתמשים חדשים" stat="1,200" svg="ClientsIcon" suffix="+15%" prefix="+"/>
            <infCard   statTitle=" סקרים חדשים" stat="350" svg="SurveyIcon" suffix="+90%" prefix=""/>
            
        </div>
        <div class="charts-container">
             <div class="line-chart inf-card">
                 <div>
                     <div class="card-title">
                         <h5>סקירת אינטרקציות</h5>
                         <p><span class="text-success">+20%</span > יותר מחודש קודם </p>
                     </div>

                 </div>
                <div>
                    <ChartLine />
                </div>
            </div>
            <div class="bar-chart inf-card">
                <ChartBar />
                <div class="card-title">
                    <h5>משתמשים פעילים</h5>
                    <p> <span class="text-success">+23%</span> יותר משבוע הקודם </p>
                </div>
                <div class="card-content">
                    <p>התרשים מציג נתונים שבועיים של לחיצות, משתמשים וסקרים. יש עלייה בסקרים, מה שמעיד על משתמשים מעורבים.</p>
                </div>
               <div class="dry-stats">
                    <div class="dry-stat">
                        <h4>3,6</h4>
                        <p>משתמשים</p>
                    </div>
                    <div class="dry-stat">
                        <h4>2M</h4>
                        <p>קליקים</p>
                    </div>
                    <div class="dry-stat">
                        <h4>783</h4>
                        <p>סקרים</p>
                    </div>
                    <div class="dry-stat">
                        <h4>10K</h4>
                        <p>חשיפות</p>
                    </div>
               </div>
            </div>
        </div>
        <div class="table-wrapper inf-card">
            <header class="table-header">
                <h4>טבלת משתמשים</h4>
            </header>
            <section class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>סניף</th>
                            <th>שביעות רצון</th>
                            <th>שעה</th>
                            <th>תאריך </th>
                        </tr>
                    </thead>
                    <tbody v-if="surveys">
                        <tr v-for="survey in surveys" :key="survey._id" >
                            <td>{{survey.branch}}</td>
                            <td class="time">{{survey.rate}}</td>
                            <td>{{formatTimestampToTime(survey.createdAt)}}</td>
                            <td>{{formatTimestampToDate(survey.createdAt)}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </main>
</template>
<script>
import DashboardHeader from './DashboardHeader.vue';
import infCard from './InfCard.vue';
import ChartBar from './charts/ChartBar.vue';
import ChartLine from './charts/ChartLine.vue';

export default {
    methods: {
        formatTimestampToTime(timestamp) {
            const date = new Date(timestamp);
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },
        formatTimestampToDate(timestamp) {
            const date = new Date(timestamp);
            const day = date.getUTCDate().toString().padStart(2, '0');
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JavaScript
            const year = date.getUTCFullYear();
            return `${day}/${month}/${year}`;
        }

    },
    computed: {
        surveys() {
            return this.$store.getters.surveys
        }
    },
    components: {
        DashboardHeader,
        infCard,
        ChartBar,
        ChartLine
    }

}
</script>
<style lang="">
    
</style>

  <!-- statTitle: {
            type: String,
            default: 'Today\'s Clicks'
        },
        stat: {
            type: String,
            default: '13,200'
        },
        prefix: {
            type: String,
            default: '+'
        },
        suffix: {
            type: String,
            default: '+10%'
        },
        svg: {
            type: String,
            default: 'BuyCart'
        } -->