function calculateRate(req, res) {
  let item_weight = req.query.item_weight;
  let mail_type = req.query.mail_type;
  switch (mail_type) {
    case "stamped":
      if (item_weight <= 3) {
        return .40 + (.15 * item_weight);
      } else if (item_weight <= 3.5) {
        return 1.00;
      }
      break;
    case "metered":
      if (item_weight <= 3) {
        return .35 + (.15 * item_weight);
      } else if (item_weight <= 3.5) {
        return .95;
      }
      break;
    case "flats":
      if (item_weight <= 1) {
        return 1;
      } else if (item_weight <= 13) {
        return (1 + (.15 * item_weight));
      }
      break;
    case "first-class":
      return 99999;
      break;
    default:
      return -1;
      break;
  }
}

module.exports = {
  calculateRate: calculateRate
};