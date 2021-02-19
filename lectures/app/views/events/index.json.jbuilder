json.array!(@events) do |event|
  json.extract! event, :id, :title, :time, :location, :desc, :type
  json.url event_url(event, format: :json)
end
