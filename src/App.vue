<template>
  <v-app>
    <v-container>
      <v-row>
        <!-- <v-col cols="12">
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <h2 class="font-weight-bold basil--text">紀錄列表</h2>
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="dt.headers"
                :items="dt.desserts"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>-->
        <v-col cols="12">
          <v-card color="basil" max-width="900" style="margin:auto">
            <v-card-title class="text-center justify-center py-6">
              <h2 class="font-weight-bold basil--text">低度成長股股價試算</h2>
            </v-card-title>
            <v-card-text>
              <v-card width>
                <v-card-title>基本參數</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col lg="4" md="4" xs="12" cols="12">
                      <v-text-field dense label="股票名稱" hide-details="auto" v-model="db_b.name"></v-text-field>
                    </v-col>
                    <v-col lg="4" md="4" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近四季EPS總和"
                        hide-details="auto"
                        v-model="db_b.eps4"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col lg="4" md="4" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近五年平均股息發放率"
                        hide-details="auto"
                        v-model="db_b.avDiv"
                      ></v-text-field>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近五年本益比高點"
                        hide-details="auto"
                        v-model="db_b.pbH"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近五年本益比低點"
                        hide-details="auto"
                        v-model="db_b.pbL"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近五年殖利率高點"
                        hide-details="auto"
                        v-model="db_b.yieH"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>

                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field
                        dense
                        label="近五年殖利率低點"
                        hide-details="auto"
                        v-model="db_b.yieL"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field dense label="歷史最高股價" hide-details="auto" v-model="db_b.hiH"></v-text-field>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-text-field dense label="歷史最低股價" hide-details="auto" v-model="db_b.hiL"></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card mt-10>
                <v-card-title>試算結果</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-card class="blue lighten-4">
                        <v-card-title>殖利率計算</v-card-title>
                        <v-card-text>
                          <v-list two-line class="blue lighten-4">
                            <v-list-item>
                              <v-list-item-title>預估現金股利:</v-list-item-title>
                              <v-list-item-subtitle>{{pDiv}}元</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title>殖利率相對高價:</v-list-item-title>
                              <v-list-item-subtitle>{{yieH}}元</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title>殖利率相對低價:</v-list-item-title>
                              <v-list-item-subtitle>{{yieL}}元</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item class="deep-orange lighten-1">
                              <v-list-item-title>殖利率平均價:</v-list-item-title>
                              <v-list-item-subtitle>{{yieA}}元</v-list-item-subtitle>
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col lg="6" md="6" xs="12" cols="12">
                      <v-card class="teal lighten-2">
                        <v-card-title>本益比計算結果</v-card-title>

                        <v-card-text>
                          <v-list two-line class="teal lighten-2">
                            <v-list-item>
                              <v-list-item-title>本益比相對高價:</v-list-item-title>
                              <v-list-item-subtitle>{{pbH}}元</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title>本益比相對低價:</v-list-item-title>
                              <v-list-item-subtitle>{{pbL}}元</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title></v-list-item-title>
                              <v-list-item-subtitle></v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item class="deep-orange lighten-1">
                              <v-list-item-title>本益比平均價:</v-list-item-title>
                              <v-list-item-subtitle>{{pbA}}元</v-list-item-subtitle>
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col lg="12" md="6" xs="12" cols="12">
                      <v-card class="lime lighten-5">
                        <v-card-title>最終結果</v-card-title>
                        <v-card-text>
                          <div id="myChart" style="width: 100%;height: 500px;"></div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <!-- <div>本益比相對高點</div>
              <div>本益比相對低點</div>
              <div>本益比計算中間價</div>
              <div>殖利相對高價</div>
              <div>殖利相對低價</div>
                    <div>殖利相對平均價</div>-->
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  // components: {
  //   HelloWorld
  // },

  data() {
    return {
      tab: null,
      items: ["首頁", "股價試算", "圖表分析", "其他訊息"],
      db_b: {
        //name: null,
        // eps4: 0,
        // avDiv: 0,
        // pbH: 0,
        // pbL: 0,
        // yieH: 0,
        // yieL: 0,
        name: "櫻花",
        eps4: 3.91,
        avDiv: 75.32,
        pbH: 14.63,
        pbL: 8.72,
        yieH: 6.94,
        yieL: 4.96,
        hiH: 5.17,
        hiL: 48.15
      },
      db_r: {
        yieH: 0,
        yieL: 0,
        yieA: 0,
        pbH: 0,
        pbL: 0,
        pbA: 0,
        pDiv: 0
      },
      dt: {
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "start",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          },
          {
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%"
          },
          {
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%"
          },
          {
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%"
          },
          {
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%"
          }
        ]
      },
      rules: [value => !!value || "必要資訊"],
      options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        legend: {
          data: ["歷史股價", "本益比", "殖利率"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value"
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: true
            },
            data: ["歷史股價", "本益比", "殖利率"]
          }
        ],
        series: [
          {
            name: "最低價",
            type: "bar",
            stack: "总量",
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)"
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: [5.17, 14, 2]
          },
          {
            name: "最高價",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top"
            },
            data: [48.15, 30, 50]
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: false,
              position: "bottom"
            },
            data: ["-", "-", "-"]
          }
        ]
      }
    };
  },
  watch: {
    "db_b.hiH": function(newVal) {
      this.options.series[0].data[0] = newVal;
      this.echarInit();
    },
    "db_b.hiL": function(newVal) {
      this.options.series[1].data[0] = newVal;
      this.echarInit();
    },
    "options.series[0].data": function() {
      this.echarInit();
    },
    "options.series[1].data": function() {
      this.echarInit();
    },
    "options.series[2].data": function() {
      this.echarInit();
    },
    "db_b.eps4": function() {
      this.echarInit();
    },
    "db_b.avDiv": function() {
      this.echarInit();
    },
    "db_b.pbH": function() {
      this.echarInit();
    },
    "db_b.pbL": function() {
      this.echarInit();
    },
    "db_b.yieH": function() {
      this.echarInit();
    },
    "db_b.yieL": function() {
      this.echarInit();
    }
  },
  computed: {
    yieH: function() {
      var pdv = this.db_b.eps4 * this.db_b.avDiv * 0.01;
      this.options.series[1].data[2] = this.flo2((pdv / this.db_b.yieL) * 100);
      return this.db_b.yieH == 0 || !this.db_b.yieH
        ? 0
        : this.flo2((pdv / this.db_b.yieL) * 100);
    },
    yieL: function() {
      var pdv = this.db_b.eps4 * this.db_b.avDiv * 0.01;
      this.options.series[0].data[2] = this.flo2((pdv / this.db_b.yieH) * 100);
      return this.db_b.yieL == 0 || !this.db_b.yieL
        ? 0
        : this.flo2((pdv / this.db_b.yieH) * 100);
    },
    yieA: function() {
      var pdv = this.db_b.eps4 * this.db_b.avDiv * 0.01;
      return this.flo2(
        ((pdv / this.db_b.yieH) * 100 + (pdv / this.db_b.yieL) * 100) / 2
      );
    },
    pbH: function() {
      this.options.series[0].data[1] = this.flo2(
        this.db_b.eps4 * this.db_b.pbH
      );
      return this.flo2(this.db_b.eps4 * this.db_b.pbH);
    },
    pbL: function() {
      this.options.series[1].data[1] = this.flo2(
        this.db_b.eps4 * this.db_b.pbL
      );
      return this.flo2(this.db_b.eps4 * this.db_b.pbL);
    },
    pbA: function() {
      return this.flo2(
        (this.db_b.eps4 * this.db_b.pbH + this.db_b.eps4 * this.db_b.pbL) / 2
      );
    },
    pDiv: function() {
      return this.flo2(this.db_b.eps4 * this.db_b.avDiv * 0.01);
    }
  },
  methods: {
    flo2: function(val) {
      return val.toFixed(2);
    },
    echarInit() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.options);
    }
  },
  mounted: function() {
    this.echarInit();
    window.onresize = function() {
      this.echarInit();
    };
  }
};
</script>
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>