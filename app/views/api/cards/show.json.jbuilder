json.merge! @card.attributes

json.actions(@card.actions) do |action|
  json.merge! action.attributes
end