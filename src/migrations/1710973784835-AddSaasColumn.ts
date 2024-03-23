import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSaasColumn1710973784835 implements MigrationInterface {
    name = 'AddSaasColumn1710973784835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "station_connector" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "stationId" integer NOT NULL, CONSTRAINT "PK_ce1e035697c244b46db645a6815" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "station" ("id" SERIAL NOT NULL, "location" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "stationGroupId" integer NOT NULL, CONSTRAINT "PK_cad1b3e7182ef8df1057b82f6aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "station_group" ("id" SERIAL NOT NULL, "location" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "saasId" integer NOT NULL, CONSTRAINT "PK_ce720c663b1638961d674b1309c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "saas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "documentId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "host" character varying NOT NULL, CONSTRAINT "UQ_01ab7c7b92a3924e44d9287f23a" UNIQUE ("name"), CONSTRAINT "UQ_a8daf73eebc1fa8e91f6dee7d33" UNIQUE ("documentId"), CONSTRAINT "UQ_03ee488be596ba40be3bbabcbb6" UNIQUE ("host"), CONSTRAINT "PK_f408b8add6cdffa70cfa4187c74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "saasId" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "station_connector" ADD CONSTRAINT "FK_0abd0e5e6f80c5aa1ea781f8108" FOREIGN KEY ("stationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "station" ADD CONSTRAINT "FK_7222df607e270e25d631561e3a6" FOREIGN KEY ("stationGroupId") REFERENCES "station_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "station_group" ADD CONSTRAINT "FK_9bfb7658cdbf835d979c91dff17" FOREIGN KEY ("saasId") REFERENCES "saas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7" FOREIGN KEY ("saasId") REFERENCES "saas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7"`);
        await queryRunner.query(`ALTER TABLE "station_group" DROP CONSTRAINT "FK_9bfb7658cdbf835d979c91dff17"`);
        await queryRunner.query(`ALTER TABLE "station" DROP CONSTRAINT "FK_7222df607e270e25d631561e3a6"`);
        await queryRunner.query(`ALTER TABLE "station_connector" DROP CONSTRAINT "FK_0abd0e5e6f80c5aa1ea781f8108"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "saas"`);
        await queryRunner.query(`DROP TABLE "station_group"`);
        await queryRunner.query(`DROP TABLE "station"`);
        await queryRunner.query(`DROP TABLE "station_connector"`);
    }

}
