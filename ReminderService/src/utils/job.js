const cron = require("node-cron");
const sender = require("../config/emailConfig");
const emailSerivce = require("../services/email-service");
const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    const response = await emailSerivce.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailSerivce.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupJobs;
