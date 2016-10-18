(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./extensions", "./core", "fable-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./extensions"), require("./core"), require("fable-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extensions, global.core, global.fableCore);
    global.charts = mod.exports;
  }
})(this, function (exports, _extensions, _core, _fableCore) {
  "use strict";

  exports.__esModule = true;
  exports.chart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var chart = exports.chart = function () {
    function chart() {
      _classCallCheck(this, chart);
    }

    chart.scatter = function scatter(xval, yval) {
      return new _extensions.Scatter(_core.ChartDataOperations.twoValues(xval, yval), "ScatterChart", (0, _extensions.ScatterChartOptions$2Eget_empty$2EStatic)());
    };

    chart.geo = function geo(data) {
      return new _extensions.Geo(_core.ChartDataOperations.oneKeyValue("string", data), "GeoChart", (0, _extensions.GeoChartOptions$2Eget_empty$2EStatic)());
    };

    chart.pie = function pie(data) {
      return new _extensions.Pie(_core.ChartDataOperations.oneKeyValue("string", data), "PieChart", (0, _extensions.PieChartOptions$2Eget_empty$2EStatic)());
    };

    chart.bar = function bar(data) {
      return new _extensions.Bar(_core.ChartDataOperations.oneKeyValue("string", data), "BarChart", (0, _extensions.BarChartOptions$2Eget_empty$2EStatic)());
    };

    chart.column = function column(data) {
      return new _extensions.Column(_core.ChartDataOperations.oneKeyValue("string", data), "ColumnChart", (0, _extensions.ColumnChartOptions$2Eget_empty$2EStatic)());
    };

    chart.columns = function columns(data, colors) {
      return new _extensions.Line(_core.ChartDataOperations.oneKeyAppendValues("string", data, colors), "ColumnChart", (0, _extensions.LineChartOptions$2Eget_empty$2EStatic)());
    };

    chart.line = function line(data) {
      return new _extensions.Line(_core.ChartDataOperations.oneKeyValue("number", data), "LineChart", (0, _extensions.LineChartOptions$2Eget_empty$2EStatic)());
    };

    chart.lines = function lines(data) {
      return new _extensions.Line(_core.ChartDataOperations.oneKeyNValues("number", data), "LineChart", (0, _extensions.LineChartOptions$2Eget_empty$2EStatic)());
    };

    chart.area = function area(data) {
      return new _extensions.Area(_core.ChartDataOperations.oneKeyValue("number", data), "AreaChart", (0, _extensions.AreaChartOptions$2Eget_empty$2EStatic)());
    };

    chart.areas = function areas(data, names) {
      var i = {
        contents: 0
      };
      var data_1 = names == null ? data : data.map(function (s) {
        void i.contents++;
        return s.setProperties(null, null, names[i.contents - 1]);
      });
      return new _extensions.Area(_core.ChartDataOperations.oneKeyNValues("number", data_1), "AreaChart", (0, _extensions.AreaChartOptions$2Eget_empty$2EStatic)());
    };

    chart.show = function show(chart_1) {
      return function (outputId) {
        _core.Helpers.showChart(chart_1, outputId);
      };
    };

    return chart;
  }();

  _fableCore.Util.setInterfaces(chart.prototype, [], "TheGamma.GoogleCharts.chart");
});
//# sourceMappingURL=charts.js.map