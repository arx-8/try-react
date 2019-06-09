/**
 * @see https://emotion.sh/docs/testing#installation
 * @see https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
 */
import serializer from "jest-emotion"

expect.addSnapshotSerializer(serializer)
