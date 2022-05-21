const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const config = require('config')

/** core dependency */
const emailTemplate = require('../emailTemplate')

const OAuth2 = google.auth.OAuth2

const user = config.get('user')
const clientId = config.get('clientId')
const clientSecret = config.get('clientSecret')
const refreshToken = config.get('refresh_token')

const OAuth2_client = new OAuth2(clientId, clientSecret)
OAuth2_client.setCredentials({ refresh_token: refreshToken })

const capitalize = (word) => word[0].toUpperCase() + word.substring(1)
const getHtmlMessage = (name) => {
  return {
    ...emailTemplate,
    html: emailTemplate.html
      .replace(/\{{tester.name}}/g, capitalize(name))
      .replace(/\{{date}}/g, 'May, 27 2022'),
  }
}
const send_mail = (name, recipient) =>
  new Promise((resolve, reject) => {
    const accessToken = OAuth2_client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user,
        clientId,
        clientSecret,
        refreshToken,
        accessToken,
      },
    })

    const template = getHtmlMessage(name)
    const mail_opt = {
      from: `W V <${user}>`,
      to: recipient,
      subject: template.subject,
      html: template.html,
    }

    transport.sendMail(mail_opt, function (err, result) {
      console.log('finish sendin mail')
      if (err) reject(error)
      else resolve(result)
      transport.close()
    })
  })

module.exports.send_mail = send_mail
