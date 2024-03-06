import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSaasIdOnUsers1709763836148 implements MigrationInterface {
    name = 'AddSaasIdOnUsers1709763836148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "saasId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7" FOREIGN KEY ("saasId") REFERENCES "saas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "saasId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d6a3ea64a0e25dfb7117130bcf7" FOREIGN KEY ("saasId") REFERENCES "saas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
