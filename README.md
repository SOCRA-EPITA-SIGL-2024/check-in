# Check in

This is a demo project aimed for EPITA SIGL students.

In this repo, we are building a very tiny web service to check in students to the course.

## Run it locally

- Make sure you have nvm installed or node version 19.
- Start the web service locally:

```sh
npm install
npm run dev
```

## Build it with docker

To build it for docker:

```sh
docker build -t check-in:v1 .
docker run --init -d -p 3000:3000 --name check-in check-in:v1
```

## Run it on your Group's VM alongside traefik

There is a docker compose file that runs the container on your workshop's VM where traefik is configured.

You can run it yourself on your machines by:

1. adapt the traefik label inside `traefik/docker-compose.yml` to use the correct group number as host
2. sending the `treafik/docker-compose.yml` file using `scp -i <path_to_your_private_key> ...`
3. run the container using the `docker compose up -d` command from the folder you've copied the `docker-compose.yml` file to.

For instance, (make sure to replace XX by your group number)

```sh
# make sure you have the correct Host(...) label inside the
# traefik/docker-compose.yml file
scp -i ~/.ssh/group-XX-socra-sigl_id_rsa treafik/docker-compose.yml sigl@groupXX.socra-sigl.fr:
ssh -i ~/.ssh/group-XX-socra-sigl_id_rsa sigl@groupXX.socra-sigl.fr
#...
# Once connected to scaleway VM of the groupXX
# sigl@groupXX$
docker compose up -d 
```

And the API should be live at `https://check-in.groupXX.socra-sigl.fr`
