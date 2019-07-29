# frozen_string_literal: true

class GreetingController < ApplicationController
  layout "react"

  def index
    @greeting_props = { name: "Stranger" }
  end
end
