#!/usr/bin/ruby
i = 99

99.step(10, -1).each do |i|
		99.step(10, -1).each do |j| 
				val = i*j
				if val.to_s == val.to_s.reverse
						puts "Value: #{val}"
					end
		end
end
