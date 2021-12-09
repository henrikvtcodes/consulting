import chalk from 'chalk';

const { bgGreen, bgRed, bgBlue, bgHex, bold, black, white } = chalk

/**
 * 
 * @param eventType 
 * @param route 
 * @param message 
 */
const apiEvent = async (eventType:string,route:string, message:string) => {

  switch (eventType) {
    case "success":
      await console.log(
        bgGreen(bold("SUCCESS") + " on " + bold(`/api/${route}`)),` ${message}`
      );

    case "info" || "event":
      await console.log(
        bgBlue(bold("EVENT") + " on " + bold(`/api/${route}`)),` ${message}`
      );

    case "error":
      await console.log(
        bgRed(bold("ERROR") + " on " + bold(`/api/${route}`)),` ${message}`
      );
  }
  

}

/**
 * 
 * @param eventStatus 
 * @param eventType 
 * @param message 
 */
const stripeEvent = async (eventStatus:string,eventType:string, message:string) =>{
  switch (eventStatus) {
    case "webhook.success":
      await console.log( 
        bgHex("#32325D")("Stripe:"),
        bgGreen(`Webhook success ${bold(eventType)}`),
        message
        
      );

    case "webhook.info" || "webhook.event":
      await console.log(
        bgHex("#32325D").white("Stripe:"),
        bgBlue(`Webhook event ${bold(eventType)}:`),
        message
      );

    case "webhook.error":
      await console.log(
        bgHex("#32325D")("Stripe:"),
        bgGreen(`Webhook event ${bold(eventType)}`),
        message

      );
  }
}


const logger = {
  apiEvent: apiEvent,
  stripeEvent: stripeEvent
} 

export default logger;