import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSaasColumn1709763608259 implements MigrationInterface {
    name = 'AddSaasColumn1709763608259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "saas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "documentId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_01ab7c7b92a3924e44d9287f23a" UNIQUE ("name"), CONSTRAINT "UQ_a8daf73eebc1fa8e91f6dee7d33" UNIQUE ("documentId"), CONSTRAINT "PK_f408b8add6cdffa70cfa4187c74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "saasId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7" FOREIGN KEY ("saasId") REFERENCES "saas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "saas"`);
    }

}
