# Use an official Ruby image as a parent image
FROM ruby:3.0

# Install dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  npm \
  python3 \
  python3-pip \
  imagemagick

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Set the working directory
WORKDIR /usr/src/app

# Copy the Gemfile and Gemfile.lock into the image
COPY Gemfile Gemfile.lock ./

# Install the gems specified in the Gemfile
RUN bundle install

# Copy the rest of the application code into the image
COPY . .

# Install Python dependencies
RUN pip3 install --upgrade nbconvert

# Install PurgeCSS
RUN npm install -g purgecss

# Expose port 4000 for Jekyll server
EXPOSE 4000

# Define the command to run the Jekyll server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]