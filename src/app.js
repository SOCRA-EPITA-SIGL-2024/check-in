const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

class CheckedInStudents {
  checkedIn = [];

  save(checkInObject) {
    this.checkedIn.push(checkInObject);
  }

  exists(groupIn) {
    return !!this.checkedIn.find(
      ({ group }) => group.toLowerCase() === groupIn.toLowerCase()
    );
  }

  getAll() {
    return this.checkedIn;
  }
}

const studentDB = new CheckedInStudents();

app.get("/", (_, res) => {
  res.send({ status: "healthy" });
});

app.post("/course/socra", (req, res) => {
  const body = req.body;
  if (body && body.group && body.slogan) {
    const { group, slogan } = req.body;
    if (studentDB.exists(group)) {
      res.send({ error: "you are already checked in for this group" });
    } else {
      studentDB.save({ group, slogan });
      res.send({ status: "you are new checked in!" });
    }
  } else {
    res.status(400);
    res.send({
      status:
        "missing / wrong parameters. Or missing 'Content-Type: application/json' header. Try again!",
    });
  }
});

app.get("/course/socra", (req, res) => {
  res.send(studentDB.getAll());
});

app.listen(port, () => {
  console.log(`Node server listening on ${port}`);
});
