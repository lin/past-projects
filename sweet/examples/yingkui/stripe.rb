# ============================================== #
# ================== Sweet ===================== #
# ============================================== #

# 621 characters

post '/charges', ->
  # Authentication
  api_key = get_api_key.
  user = User.find_by_key api_key

  unless user -> error: "Invalid API key."

  # Collect user parameters
  card_number = params.card_number
  amount = params.amount.to_i

  # Validations
  unless card_number.length == 16 -> error: "Invalid card number."

  unless 0 < amount <= CHARGE_MAX -> error: "Invalid amount."

  # Actually create the charge
  charge = create_charge card_number, amount

  # Return an API response
  json
    id:          charge.id
    amount:      charge.amount
    card_number: charge.redacted_card_number
    success:     charge.success

# ============================================= #
# ================== Ruby ===================== #
# ============================================= #

# 687 characters, 10% more

post '/charges' do
  # Authentication
  api_key = get_api_key
  user = User.find_by_key(api_key)

  unless user
    return {error: "Invalid API key."}
  end

  # Collect user parameters
  card_number = params[:card_number]
  amount = params[:amount].to_i

  # Validations
  unless card_number.length == 16
    return {error: "Invalid card number."}
  end

  unless amount > 0 and amount <= CHARGE_MAX
    return {error: "Invalid amount."}
  end

  # Actually create the charge
  charge = create_charge(card_number, amount)

  # Return an API response
  json {
    id: charge.id,
    amount: charge.amount,
    card_number: charge.redacted_card_number,
    success: charge.success
  }
end
