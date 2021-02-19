module EventsHelper

  def get_event_category_color category
    case category
    when "Computer Science"
      "#3498db"
    when "Phisics"
      "#e67e22"
    when "Bio"
      "#27ae60"
    when "Math"
      "#8e44ad"
    else
      "#e74c3c"
    end
  end
end
