package com.sheep.m2c.sama.guetteu.repository;

import com.sheep.m2c.sama.guetteu.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
