from flask import Flask, render_template, request, flash
import pandas
import os

app = Flask(__name__)

df_jobs = pandas.read_csv("jobs.csv", sep=",", encoding="ISO-8859-1")
df_jobs.columns = df_jobs.columns.str.strip()

df_portfolio = pandas.read_csv("portfolio.csv", sep=",", encoding="ISO-8859-1")
df_portfolio.columns = df_portfolio.columns.str.strip()


@app.route("/", methods=["GET", "POST"])
def bio():
    jobs = df_jobs[df_jobs['priority'] == 1]
    jobs = jobs[['position_name', 'company', 'tech', 'job_description', 'job_detail',
                 'start_date', 'end_date']].to_dict(orient='records')

    old_jobs = df_jobs[df_jobs['priority'] == 2]
    old_jobs = old_jobs[['position_name', 'company', 'tech', 'job_description', 'job_detail',
                         'start_date', 'end_date']].to_dict(orient='records')

    return render_template("bio.html", jobs=jobs, old_jobs=old_jobs)


@app.route("/portfolio/", methods=["GET", "POST"])
def portfolio():
    projects = df_portfolio[['title', 'description', 'url', 'image']].to_dict(orient='records')
    return render_template("portfolio.html", projects=projects)


"""
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
"""
if __name__ == "__main__":
    with app.app_context():
        app.run(debug=True, port=5001)
