from flask import Blueprint, render_template

bp = Blueprint("chart", __name__)


@bp.get("/bar-chart")
def bar_chart():
    return render_template("bar_chart.jinja")


@bp.get("/line-chart")
def line_chart():
    return render_template("line_chart.jinja")
