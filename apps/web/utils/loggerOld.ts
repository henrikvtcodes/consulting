import chalk from 'chalk';

const { bgGreen, bgRed, bgBlue, bgHex, bold, black, white } = chalk

type EventType = "success" | "info" | "event" | "error"

/**
 * 
 * @param eventType 
 * @param route 
 * @param message 
 */
const apiEvent = async (eventType:EventType,route:string, message:string) => {

  switch (eventType) {
    case "success":
      console.log(
        bgGreen(bold("SUCCESS") + " on " + bold(`/api/${route}`)),` ${message}`
      );

    case "info" || "event":
      console.log(
        bgBlue(bold("EVENT") + " on " + bold(`/api/${route}`)),` ${message}`
      );

    case "error":
      console.log(
        bgRed(bold("ERROR") + " on " + bold(`/api/${route}`)),` ${message}`
      );
  }
  

}

/**
 * 
 * @param eventType 
 * @param route 
 * @param message 
 */
const miscEvent = async (eventType:EventType,title:string, message:string) => {

  switch (eventType) {
    case "success":
      console.log(
        bgGreen(bold(`${title}:`)),` ${message}`
      );

    case "info" || "event":
      console.log(
        bgBlue(bold(`${title}:`)),` ${message}`
      );

    case "error":
      console.log(
        bgRed(bold(`${title}:`)),` ${message}`
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
      console.log( 
        bgHex("#32325D")("Stripe:"),
        bgGreen(`Webhook success ${bold(eventType)}`),
        message
        
      );

    case "webhook.info" || "webhook.event":
      console.log(
        bgHex("#32325D").white("Stripe:"),
        bgBlue(`Webhook event ${bold(eventType)}:`),
        message
      );

    case "webhook.error":
      console.log(
        bgHex("#32325D")("Stripe:"),
        bgGreen(`Webhook event ${bold(eventType)}`),
        message

      );
  }
}


const logger = {
  apiEvent: apiEvent,
  stripeEvent: stripeEvent,
  miscEvent: miscEvent,
} 

export default logger;